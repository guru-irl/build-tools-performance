import React from 'react';
const LABEL_20426 = 'component_20426';
export function Component20426({ value = 20426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20426, 'data-value': derived.doubled }, children);
}
export default Component20426;
