import React from 'react';
const LABEL_29903 = 'component_29903';
export function Component29903({ value = 29903, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29903, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29903, 'data-value': derived.doubled }, children);
}
export default Component29903;
