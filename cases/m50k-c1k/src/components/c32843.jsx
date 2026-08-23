import React from 'react';
const LABEL_32843 = 'component_32843';
export function Component32843({ value = 32843, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32843, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32843, 'data-value': derived.doubled }, children);
}
export default Component32843;
