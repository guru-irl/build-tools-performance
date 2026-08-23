import React from 'react';
const LABEL_20869 = 'component_20869';
export function Component20869({ value = 20869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20869, 'data-value': derived.doubled }, children);
}
export default Component20869;
