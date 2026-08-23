import React from 'react';
const LABEL_36935 = 'component_36935';
export function Component36935({ value = 36935, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36935, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36935, 'data-value': derived.doubled }, children);
}
export default Component36935;
