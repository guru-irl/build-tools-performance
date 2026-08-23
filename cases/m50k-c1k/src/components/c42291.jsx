import React from 'react';
const LABEL_42291 = 'component_42291';
export function Component42291({ value = 42291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42291, 'data-value': derived.doubled }, children);
}
export default Component42291;
