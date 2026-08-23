import React from 'react';
const LABEL_15401 = 'component_15401';
export function Component15401({ value = 15401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15401, 'data-value': derived.doubled }, children);
}
export default Component15401;
