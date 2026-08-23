import React from 'react';
const LABEL_34828 = 'component_34828';
export function Component34828({ value = 34828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34828, 'data-value': derived.doubled }, children);
}
export default Component34828;
