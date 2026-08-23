import React from 'react';
const LABEL_19501 = 'component_19501';
export function Component19501({ value = 19501, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19501, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19501, 'data-value': derived.doubled }, children);
}
export default Component19501;
