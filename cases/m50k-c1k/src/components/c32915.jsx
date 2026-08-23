import React from 'react';
const LABEL_32915 = 'component_32915';
export function Component32915({ value = 32915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32915, 'data-value': derived.doubled }, children);
}
export default Component32915;
