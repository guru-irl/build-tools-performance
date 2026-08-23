import React from 'react';
const LABEL_5935 = 'component_5935';
export function Component5935({ value = 5935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5935, 'data-value': derived.doubled }, children);
}
export default Component5935;
