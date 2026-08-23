import React from 'react';
const LABEL_36764 = 'component_36764';
export function Component36764({ value = 36764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36764, 'data-value': derived.doubled }, children);
}
export default Component36764;
