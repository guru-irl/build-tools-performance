import React from 'react';
const LABEL_14086 = 'component_14086';
export function Component14086({ value = 14086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14086, 'data-value': derived.doubled }, children);
}
export default Component14086;
