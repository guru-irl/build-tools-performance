import React from 'react';
const LABEL_41863 = 'component_41863';
export function Component41863({ value = 41863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41863, 'data-value': derived.doubled }, children);
}
export default Component41863;
