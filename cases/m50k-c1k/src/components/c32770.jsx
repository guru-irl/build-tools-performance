import React from 'react';
const LABEL_32770 = 'component_32770';
export function Component32770({ value = 32770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32770, 'data-value': derived.doubled }, children);
}
export default Component32770;
