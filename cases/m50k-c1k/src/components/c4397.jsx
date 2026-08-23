import React from 'react';
const LABEL_4397 = 'component_4397';
export function Component4397({ value = 4397, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4397, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4397, 'data-value': derived.doubled }, children);
}
export default Component4397;
