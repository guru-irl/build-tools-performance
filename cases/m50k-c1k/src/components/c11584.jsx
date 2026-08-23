import React from 'react';
const LABEL_11584 = 'component_11584';
export function Component11584({ value = 11584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11584, 'data-value': derived.doubled }, children);
}
export default Component11584;
