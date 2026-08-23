import React from 'react';
const LABEL_24166 = 'component_24166';
export function Component24166({ value = 24166, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24166, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24166, 'data-value': derived.doubled }, children);
}
export default Component24166;
