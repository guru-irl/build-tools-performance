import React from 'react';
const LABEL_42790 = 'component_42790';
export function Component42790({ value = 42790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42790, 'data-value': derived.doubled }, children);
}
export default Component42790;
