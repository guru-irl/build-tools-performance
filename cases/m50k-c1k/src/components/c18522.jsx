import React from 'react';
const LABEL_18522 = 'component_18522';
export function Component18522({ value = 18522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18522, 'data-value': derived.doubled }, children);
}
export default Component18522;
