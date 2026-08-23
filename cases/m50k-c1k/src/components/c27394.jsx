import React from 'react';
const LABEL_27394 = 'component_27394';
export function Component27394({ value = 27394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27394, 'data-value': derived.doubled }, children);
}
export default Component27394;
