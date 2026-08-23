import React from 'react';
const LABEL_4598 = 'component_4598';
export function Component4598({ value = 4598, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4598, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4598, 'data-value': derived.doubled }, children);
}
export default Component4598;
