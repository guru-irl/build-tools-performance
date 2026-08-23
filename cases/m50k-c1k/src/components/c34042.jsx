import React from 'react';
const LABEL_34042 = 'component_34042';
export function Component34042({ value = 34042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34042, 'data-value': derived.doubled }, children);
}
export default Component34042;
