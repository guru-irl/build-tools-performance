import React from 'react';
const LABEL_4465 = 'component_4465';
export function Component4465({ value = 4465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4465, 'data-value': derived.doubled }, children);
}
export default Component4465;
