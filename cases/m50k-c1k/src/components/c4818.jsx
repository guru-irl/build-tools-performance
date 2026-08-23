import React from 'react';
const LABEL_4818 = 'component_4818';
export function Component4818({ value = 4818, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4818, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4818, 'data-value': derived.doubled }, children);
}
export default Component4818;
