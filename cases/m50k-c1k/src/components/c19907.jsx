import React from 'react';
const LABEL_19907 = 'component_19907';
export function Component19907({ value = 19907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19907, 'data-value': derived.doubled }, children);
}
export default Component19907;
