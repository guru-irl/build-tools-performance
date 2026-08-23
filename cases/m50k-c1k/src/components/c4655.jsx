import React from 'react';
const LABEL_4655 = 'component_4655';
export function Component4655({ value = 4655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4655, 'data-value': derived.doubled }, children);
}
export default Component4655;
