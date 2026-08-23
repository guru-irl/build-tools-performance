import React from 'react';
const LABEL_19993 = 'component_19993';
export function Component19993({ value = 19993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19993, 'data-value': derived.doubled }, children);
}
export default Component19993;
