import React from 'react';
const LABEL_29368 = 'component_29368';
export function Component29368({ value = 29368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29368, 'data-value': derived.doubled }, children);
}
export default Component29368;
