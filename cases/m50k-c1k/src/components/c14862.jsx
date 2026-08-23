import React from 'react';
const LABEL_14862 = 'component_14862';
export function Component14862({ value = 14862, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14862, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14862, 'data-value': derived.doubled }, children);
}
export default Component14862;
