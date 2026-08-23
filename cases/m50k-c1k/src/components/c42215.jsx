import React from 'react';
const LABEL_42215 = 'component_42215';
export function Component42215({ value = 42215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42215, 'data-value': derived.doubled }, children);
}
export default Component42215;
