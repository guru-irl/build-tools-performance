import React from 'react';
const LABEL_45949 = 'component_45949';
export function Component45949({ value = 45949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45949, 'data-value': derived.doubled }, children);
}
export default Component45949;
