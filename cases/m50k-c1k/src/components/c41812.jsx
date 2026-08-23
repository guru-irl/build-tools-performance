import React from 'react';
const LABEL_41812 = 'component_41812';
export function Component41812({ value = 41812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41812, 'data-value': derived.doubled }, children);
}
export default Component41812;
