import React from 'react';
const LABEL_20996 = 'component_20996';
export function Component20996({ value = 20996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20996, 'data-value': derived.doubled }, children);
}
export default Component20996;
