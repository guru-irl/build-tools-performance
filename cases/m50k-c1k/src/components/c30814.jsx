import React from 'react';
const LABEL_30814 = 'component_30814';
export function Component30814({ value = 30814, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30814, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30814, 'data-value': derived.doubled }, children);
}
export default Component30814;
