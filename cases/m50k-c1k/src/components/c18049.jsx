import React from 'react';
const LABEL_18049 = 'component_18049';
export function Component18049({ value = 18049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18049, 'data-value': derived.doubled }, children);
}
export default Component18049;
