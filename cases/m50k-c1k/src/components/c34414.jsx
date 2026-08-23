import React from 'react';
const LABEL_34414 = 'component_34414';
export function Component34414({ value = 34414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34414, 'data-value': derived.doubled }, children);
}
export default Component34414;
