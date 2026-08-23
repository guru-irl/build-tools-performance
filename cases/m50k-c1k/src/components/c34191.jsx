import React from 'react';
const LABEL_34191 = 'component_34191';
export function Component34191({ value = 34191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34191, 'data-value': derived.doubled }, children);
}
export default Component34191;
