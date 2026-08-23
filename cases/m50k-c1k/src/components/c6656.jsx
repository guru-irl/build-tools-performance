import React from 'react';
const LABEL_6656 = 'component_6656';
export function Component6656({ value = 6656, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6656, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6656, 'data-value': derived.doubled }, children);
}
export default Component6656;
