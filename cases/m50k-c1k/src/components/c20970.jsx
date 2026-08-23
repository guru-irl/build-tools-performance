import React from 'react';
const LABEL_20970 = 'component_20970';
export function Component20970({ value = 20970, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20970, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20970, 'data-value': derived.doubled }, children);
}
export default Component20970;
