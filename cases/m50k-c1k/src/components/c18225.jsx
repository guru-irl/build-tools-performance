import React from 'react';
const LABEL_18225 = 'component_18225';
export function Component18225({ value = 18225, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18225, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18225, 'data-value': derived.doubled }, children);
}
export default Component18225;
