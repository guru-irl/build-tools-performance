import React from 'react';
const LABEL_20998 = 'component_20998';
export function Component20998({ value = 20998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20998, 'data-value': derived.doubled }, children);
}
export default Component20998;
