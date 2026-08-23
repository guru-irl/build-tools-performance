import React from 'react';
const LABEL_24828 = 'component_24828';
export function Component24828({ value = 24828, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24828, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24828, 'data-value': derived.doubled }, children);
}
export default Component24828;
