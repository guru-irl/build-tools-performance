import React from 'react';
const LABEL_34770 = 'component_34770';
export function Component34770({ value = 34770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34770, 'data-value': derived.doubled }, children);
}
export default Component34770;
