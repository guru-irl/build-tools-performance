import React from 'react';
const LABEL_16881 = 'component_16881';
export function Component16881({ value = 16881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16881, 'data-value': derived.doubled }, children);
}
export default Component16881;
