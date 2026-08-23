import React from 'react';
const LABEL_35082 = 'component_35082';
export function Component35082({ value = 35082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35082, 'data-value': derived.doubled }, children);
}
export default Component35082;
