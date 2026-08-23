import React from 'react';
const LABEL_15908 = 'component_15908';
export function Component15908({ value = 15908, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15908, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15908, 'data-value': derived.doubled }, children);
}
export default Component15908;
