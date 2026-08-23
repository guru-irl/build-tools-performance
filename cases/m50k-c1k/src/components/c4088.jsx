import React from 'react';
const LABEL_4088 = 'component_4088';
export function Component4088({ value = 4088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4088, 'data-value': derived.doubled }, children);
}
export default Component4088;
