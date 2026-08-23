import React from 'react';
const LABEL_4458 = 'component_4458';
export function Component4458({ value = 4458, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4458, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4458, 'data-value': derived.doubled }, children);
}
export default Component4458;
