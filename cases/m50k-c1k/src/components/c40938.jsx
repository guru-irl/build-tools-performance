import React from 'react';
const LABEL_40938 = 'component_40938';
export function Component40938({ value = 40938, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40938, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40938, 'data-value': derived.doubled }, children);
}
export default Component40938;
