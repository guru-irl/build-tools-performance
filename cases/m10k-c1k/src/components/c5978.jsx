import React from 'react';
const LABEL_5978 = 'component_5978';
export function Component5978({ value = 5978, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5978, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5978, 'data-value': derived.doubled }, children);
}
export default Component5978;
