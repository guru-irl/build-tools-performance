import React from 'react';
const LABEL_24585 = 'component_24585';
export function Component24585({ value = 24585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24585, 'data-value': derived.doubled }, children);
}
export default Component24585;
