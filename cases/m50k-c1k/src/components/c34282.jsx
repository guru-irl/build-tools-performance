import React from 'react';
const LABEL_34282 = 'component_34282';
export function Component34282({ value = 34282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34282, 'data-value': derived.doubled }, children);
}
export default Component34282;
