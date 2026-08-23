import React from 'react';
const LABEL_41656 = 'component_41656';
export function Component41656({ value = 41656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41656, 'data-value': derived.doubled }, children);
}
export default Component41656;
