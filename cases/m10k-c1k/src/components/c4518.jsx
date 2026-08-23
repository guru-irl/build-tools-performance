import React from 'react';
const LABEL_4518 = 'component_4518';
export function Component4518({ value = 4518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4518, 'data-value': derived.doubled }, children);
}
export default Component4518;
