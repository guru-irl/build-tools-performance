import React from 'react';
const LABEL_34340 = 'component_34340';
export function Component34340({ value = 34340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34340, 'data-value': derived.doubled }, children);
}
export default Component34340;
