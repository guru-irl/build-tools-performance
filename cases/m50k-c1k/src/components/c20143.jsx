import React from 'react';
const LABEL_20143 = 'component_20143';
export function Component20143({ value = 20143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20143, 'data-value': derived.doubled }, children);
}
export default Component20143;
